function submitData(userName, userEmail) {
    return (fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`,
        }),
    })
        .then(res => res.json())
        .then(function (json) {
            const newId = json.id
            const newHeader = document.getElementById("h1")
            newHeader.innerHTML = `${newId}`
        })
        .catch(function (error) {
            const newHeader2 = document.getElementById("h2")
            newHeader2.innerHTML = `${error}`
        })
    )
}