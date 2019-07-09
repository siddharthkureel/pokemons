import React from 'react'
const Ability = ({ abilities }) => {
       // eslint-disable-next-line
        const list = abilities.map(ability => {
             for (let i in ability) {
                return <option key={ability[i].name} value={ability[i].name}>{ability[i].name}</option>
            }
        })
        return <div>Ability: <select>{list}</select></div>
}

export default Ability;
