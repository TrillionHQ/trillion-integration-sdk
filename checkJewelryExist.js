function jewelryExists(jewelryId) {
    const data = {
        "data": { id: jewelryId }
    };
    fetch(`https://us-central1-trillionprod.cloudfunctions.net/jewelryExists`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Cache-Control": "no-cache"
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.result) {
                return true
            }
        })
}
