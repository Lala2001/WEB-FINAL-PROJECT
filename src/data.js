window.reviewData = [
    {
        name: 'Lucky',
        date: '2023-04-13',
        rating: 4,
        text: 'Great explaination. Thank you!'
    },
    {
        name: 'Nicky',
        date: '2023-04-11',
        rating: 5,
        text: 'Oh Thanks. Now I can finally play with my friends without looking dumb'
    },
    {
        name: 'Sara',
        date: '2023-04-01',
        rating: 3,
        text: "why Can't we move a piece to the home triangle without an exact number???"
    },
    {
        name: 'Jon',
        date: '2023-04-05',
        rating: 5,
        text: 'Very good explaination'
    },
    {
        name: 'Rebeca',
        date: '2023-03-15',
        rating: 4,
        text: 'Thank you for the tips. It helped'
    },
];

function displayReview(){
    const container = document.getElementById("reviewData");
    container.innerHTML = "";

    const review_Container = document.createElement("div");
    review_Container.innerHTML = "";
    reviewData.forEach((r) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.margin = "10px";
        card.style.backgroundColor = "cadetblue";
        card.style.border = "1px rgb(26, 51, 58) solid"

        const rName = document.createElement("h4");
        rName.innerHTML = r.name;
        rName.style.marginLeft = "10px"
        card.appendChild(rName);

        const rDate = document.createElement("p");
        rDate.innerHTML = "Date: " + r.date;
        rDate.style.marginLeft = "10px"
        card.appendChild(rDate);

        const rRate = document.createElement("p");
        rRate.innerHTML = "Rating: " + r.rating
        rRate.style.marginLeft = "10px"
        card.appendChild(rRate);

        const rText = document.createElement("p");
        rText.innerHTML =  r.text
        rText.style.marginLeft = "10px"
        card.appendChild(rText);

        const nav = document.getElementById("newReview");
        const reviewButton = document.getElementById("button");
        const nName = document.getElementById("name");
        const nDate = document.getElementById("date");
        const nRate = document.getElementById("rating");
        const nText = document.getElementById("text");
        nName === r.name;
        nDate === r.date;
        nRate === r.rating;
        nText === r.text;
        reviewButton.onclick = () => {
            card.appendChild(nName)
            card.appendChild(nDate);
            card.appendChild(nRate);
            card.appendChild(nText);
        }

        review_Container.appendChild(card);
        review_Container.style.display = "grid";
        review_Container.style.gridTemplateColumns = "1fr 1fr";
        review_Container.style.justifyContent = "center"

        container.appendChild(review_Container);
        container.style.marginLeft = "200px"
        container.style.marginRight = "200px" 
        return card;
    });
}
console.log(displayReview())

