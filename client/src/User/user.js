export const getUser = async () => {
    const res = await fetch('/checksess', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json();
    if (res.status === 200) {
        // alert(data.name);
        return data;
    } else {
        alert("Unable to retreive user");
    }
}

