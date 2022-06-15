
export default function createMushrooms(root) {
    const container = root.querySelector('.mushroom-container');

    return ({ mushrooms }) => {
        // *** clear out the container element needs to be all caps
        container.innerHTML = '';
        // loop the mushrooms!
        for (let mushroom of mushrooms) {
        // add one Mushroom component for each mushroom object
            let dog = { mushroom };
        //     - call the Mushroom component with the mushroom object
            let newDog = Mushroom(dog);
        //     - append the returned element to the container  
            container.append(newDog);
        }

    };
}


export function Mushroom({ mushroom }) {
    const img = document.createElement('img');
    img.src = 'assets/mushrooms/' + mushroom.type + '.png';
    img.alt = mushroom.type;
    return img;
}