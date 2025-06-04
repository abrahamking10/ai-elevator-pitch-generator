This website generates a mini elevator pitch however you want. 

Whether it's playful, dramatic, formal, or any of the 8 different options, this website's got you covered. 

DEVELOPERS READ-- 
How it works: 
In the index.html file, there are different input fields that you put your data in. Whenever the 'Generate Pitch' button is clicked, script.js gathers up all the information and organizes it into an object (called data.) 
It checks to see if all the files (besides the Education section, because that's optional) are filled out. If not it returns an error and alerts the user that it's not all filled out and they need to do that before generating the pitch. 
If everything is successful and filled out, it accesses the backend (server.js) which does all the magic. I had to do a ton of research for this, since im a frontend developer and have never used backend anything before. I additionally had to use 
some ChatGPT because the ai I was using (Groq) had no tutorials or information on how to use it. I picked Groq because it was a completely free alternative over OpenAI. If you want to recreate this yourself, I would recommend using 
the OpenAI models, as it costs roughly 1 dollar to generate around 2000 pitches, and I think it's a smarter AI tool than Groq. From what I understand, the frontend sends a request to the backend using fetch and also gives the data that was 
taken from the form using POST. The backend takes the data and puts it into a prompt to give the AI. It uses the API key from .env to send the prompt to the AI. The AI generates a reply and sends it back to the backend. The backend gets the reply back and sends it to the frontend to display on the screen. 
