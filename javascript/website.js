function downloadResume() {
    const resume = document.createElement("a");
    resume.href = "https://drive.google.com/uc?export=download&id=1sUAKxILq3yeILiP2yBGeNcYbje8TjiW3";
    resume.download = "Yomna_Elmousalami_Resume.pdf";
    document.body.appendChild(resume);
    resume.click();
}