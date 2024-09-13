// script.ts
const toggleSkillsButton = document.getElementById('toggleSkillsButton');
const skillsSection = document.getElementById('skills');

toggleSkillsButton?.addEventListener('click', () => {
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
});
