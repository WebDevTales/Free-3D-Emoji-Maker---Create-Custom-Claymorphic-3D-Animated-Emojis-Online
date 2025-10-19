document.getElementById('copySvgBtn').onclick = () => {
    const svg = document.getElementById('emojiDisplay');
    let svgContent = svg.innerHTML;
    
    let htmlOutput = '';
    
    if (state.mouseMode !== 'none') {
        // Generate just SVG + script
        const scriptContent = generateInteractionScript(state.mouseMode, state.mouseIntensity);
        
        htmlOutput = '<svg id="claymoji" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + state.canvasWidth + ' ' + state.canvasHeight + '">' + svgContent + '</svg>\n\n<script>\n' + scriptContent + '\ninitInteraction();\n</script>';
        
    } else {
        // Just SVG without interaction
        htmlOutput = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + state.canvasWidth + ' ' + state.canvasHeight + '">' + svgContent + '</svg>';
    }
    
    navigator.clipboard.writeText(htmlOutput).then(() => {
        if (state.mouseMode !== 'none') {
            showToast('✅ Interactive SVG copied! (' + state.mouseMode + ')');
        } else {
            showToast('✅ SVG copied to clipboard!');
        }
    });
};
