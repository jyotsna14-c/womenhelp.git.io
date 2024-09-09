// Initialize or retrieve stored stories from LocalStorage
let stories = JSON.parse(localStorage.getItem('stories')) || [];

// Function to display stories dynamically
const storiesContainer = document.querySelector('.stories-container');
function displayStories() {
    storiesContainer.innerHTML = '';  // Clear previous content
    stories.forEach(story => {
        const storyElement = document.createElement('div');
        storyElement.classList.add('story');
        storyElement.innerHTML = `<h3>${story.name}</h3><p>${story.story}</p>`;
        storiesContainer.appendChild(storyElement);
    });
}

// Display stories on page load
displayStories();

// Story form submission handling
document.getElementById('story-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value || "Anonymous";
    const storyText = document.getElementById('story').value;
    
    if (storyText) {
        // Add the new story to the stories array
        const newStory = { name, story: storyText };
        stories.push(newStory);

        // Update LocalStorage with the new stories array
        localStorage.setItem('stories', JSON.stringify(stories));
        
        // Display the updated list of stories
        displayStories();
        
        // Clear the form after submission
        document.getElementById('story-form').reset();
        
        alert('Thank you for sharing your story!');
    }
});
