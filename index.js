import { eventSource, event_types } from '../../../../script.js';

const EXTENSION_NAME = 'st-vn-engine';
let isVnModeActive = false;

/**
 * Main initialization point for the extension
 */
async function initExtension() {
    console.log(`[VN Engine] Initializing core modules...`);
    
    // 1. Build the UI elements
    buildFloatingButton();
    buildVnOverlay();
    
    // 2. Inject core formatting rules into ST's Lorebook system automatically
    await injectCoreRules();

    // 3. Listen for new chat messages from AI to update the VN screen
    eventSource.on(event_types.MESSAGE_RECEIVED, handleNewMessage);
    
    console.log(`[VN Engine] Initialization complete. Ready to play!`);
}

/**
 * Creates the floating toggle button on the bottom right
 */
function buildFloatingButton() {
    const btn = document.createElement('div');
    btn.id = 'st-vn-floating-btn';
    btn.innerHTML = '🎮'; // Controller icon
    btn.title = 'Toggle Visual Novel Mode';
    
    btn.addEventListener('click', toggleVnMode);
    document.body.appendChild(btn);
}

/**
 * Creates the full-screen Visual Novel overlay
 */
function buildVnOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'st-vn-overlay';
    
    // Injecting HTML structure for the VN UI
    overlay.innerHTML = `
        <button id="st-vn-close-btn">✖ Close VN</button>
        
        <div id="st-vn-sprite-container">
            <!-- Sprites will be injected here via JS later -->
            <img class="vn-sprite" id="st-vn-main-sprite" src="" style="display:none;" />
        </div>
        
        <div id="st-vn-textbox-container">
            <div id="st-vn-speaker-name">System</div>
            <div id="st-vn-dialogue-text">Welcome to the VN Engine. Waiting for AI response...</div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Handle close button
    document.getElementById('st-vn-close-btn').addEventListener('click', () => {
        isVnModeActive = false;
        overlay.style.display = 'none';
    });
}

/**
 * Toggles the visibility of the VN Overlay
 */
function toggleVnMode() {
    isVnModeActive = !isVnModeActive;
    const overlay = document.getElementById('st-vn-overlay');
    
    if (isVnModeActive) {
        overlay.style.display = 'flex';
        // TODO: In Phase 2, parse the *last* chat message to restore current BG and Sprite
        console.log(`[VN Engine] VN Mode Active.`);
    } else {
        overlay.style.display = 'none';
        console.log(`[VN Engine] VN Mode Deactivated.`);
    }
}

/**
 * Automatically injects the core rules (System Prompt/Lorebook) into ST.
 */
async function injectCoreRules() {
    // TODO: Phase 2 - Check if the VN formatting entry exists in the current Lorebook.
    // If not, silently push the rules (JSON format guide) so the AI knows how to reply.
    console.log(`[VN Engine] Checked/Injected core formatting rules.`);
}

/**
 * Event handler triggered whenever a message is generated
 */
function handleNewMessage(data) {
    // TODO: Phase 2 - chatParser module
    // 1. Extract <vn> tags from data.message
    // 2. Look up the corresponding URL from the Game Data JSON
    // 3. Update #st-vn-overlay background, #st-vn-main-sprite src, and textbox content
}

// Start the extension when loaded
jQuery(async () => {
    await initExtension();
});
