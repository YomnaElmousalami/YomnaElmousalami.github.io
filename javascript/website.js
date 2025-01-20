function downloadResume() {
    const resume = document.createElement("a");
    resume.href = "https://drive.google.com/uc?export=download&id=14GX06n2trqafWFuqP9_wpr9O6ZvcXwb6";
    resume.download = "Yomna_Elmousalami_Resume.pdf";
    document.body.appendChild(resume);
    resume.click();
}

const imageYomna = document.querySelector('#photo_circle');
const canvas = document.getElementById('#confetti');
const jsConfetti = new JSConfetti({ });

window.onload = () => {
    jsConfetti.addConfetti()
};