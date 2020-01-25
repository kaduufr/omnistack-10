import React, { useEffect, useState } from 'react'

function DevForm({ onSubmit }) {

    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [github_username, setGitHubUsername] = useState('')
    const [techs, setTechs] = useState('')

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(position => {
            const {latitude, longitude} = position.coords
            setLatitude(latitude)
            setLongitude(longitude)
        }, error => {
            console.log(error)
        },{
            timeout: 30000
        })
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        });

        setGitHubUsername('')
        setTechs('')
    }

    return (
        <form onSubmit={handleSubmit} >
            <div className="input-block">
                <label htmlFor="">Usuario do Github</label>
                <input
                    name="github_username"
                    id="username_github"
                    required
                    value={github_username}
                    onChange={e =>setGitHubUsername(e.target.value)}
                />
            </div>
            <div className="input-block">
                <label htmlFor="techs">Technologias</label>
                <input
                    name="techs"
                    id="techs"
                    required
                    value={techs}
                    onChange={e =>setTechs(e.target.value)}
                />
            </div>
            <div className="input-group">
                <div className="input-block">
                  <label htmlFor="">Latitude</label>
                  <input
                      type="number"
                      name="latitude"
                      id="latitude"
                      value={latitude}
                      required
                      onChange={e =>setLatitude(e.target.value)}
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="">Longitude</label>
                  <input
                      type="number"
                      name="longitude"
                      id="longitude"
                      value={longitude}
                      required
                      onChange={e =>setLongitude(e.target.value)}
                  />
                </div>
            </div>

            <button type="submit">Salvar</button>
        </form>
    )
}

export default DevForm