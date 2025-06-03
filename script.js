async function getData() {
    const inputName = document.getElementById("name").value;
    const inputSkill = document.getElementById("skill").value;
    const inputExperience = document.getElementById("experience").value;
    const inputEducation = document.getElementById("education").value;
    const inputTone = document.getElementById("tone").value;
    const inputCharacters = document.getElementById("character_count").value;


    const data = {
        "Name": inputName,
        "Skill": inputSkill,
        "Experience": inputExperience,
        "Education": inputEducation,
        "Tone": inputTone,
        "Characters": inputCharacters
    }

    for (let key in data) { //Loops through the data table and prints the key plus value. If data[key] (the value) is nothing then it logs that one of the values is missing.
        console.log(key + ": " + data[key]);
        if (data[key] == "" && key != "Education") { //If the data is nothing and the key that its checking is not Education (since its optional) then it throws an error
            console.log("Error: One of the values is missing.");
            return;
        }
        if (data["Education"] == "") {
            data["Education"] = "No answer provided."
        }
    }



     // Send the data to the backend using fetch()
    try {
        const response = await fetch("http://localhost:3000/generate-resume", {
            method: "POST", // Tell the backend we’re sending data
            headers: {
                "Content-Type": "application/json" // We're sending JSON
            },
            body: JSON.stringify(data) // Convert the JS object to a JSON string
        });

        // Wait for the backend to respond and parse it as JSON
        const result = await response.json();

        // Log the response in the console for debugging
        console.log("Response from backend:", result);

        // Display the generated resume (or message) on the webpage
        document.getElementById("resume-output").innerText = result.message;

    } catch (err) {
        // If something goes wrong (e.g. server is down), log the error
        console.error("Error sending data to backend:", err);
    }
}