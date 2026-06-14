// Import các event và thư viện nội bộ của SillyTavern
import { eventSource, event_types } from '../../../../script.js';
import { getContext } from '../../../extensions.js';

// Khởi tạo biến môi trường cho extension
const extensionName = 'st-vn-player';
let extensionSettings = {};

/**
 * Hàm khởi tạo chính của Extension
 */
async function initExtension() {
    console.log(`[VN Player] Đang khởi tạo extension...`);

    // 1. Tạo giao diện UI cơ bản cho VN Player
    setupVNLayer();

    // 2. Lắng nghe các sự kiện từ SillyTavern (VD: Khi nhận tin nhắn mới)
    eventSource.on(event_types.MESSAGE_RECEIVED, onMessageReceived);
    eventSource.on(event_types.CHAT_CHANGED, onChatChanged);

    console.log(`[VN Player] Khởi tạo thành công! Sẵn sàng chơi Visual Novel.`);
}

/**
 * Hàm tạo lớp Overlay cho Visual Novel
 */
function setupVNLayer() {
    // Chúng ta sẽ tạo một Container bao phủ màn hình để render Sprite và Textbox sau này
    const vnContainer = document.createElement('div');
    vnContainer.id = 'st-vn-player-container';
    vnContainer.style.display = 'none'; // Ẩn mặc định
    
    // Inject vào body của SillyTavern
    document.body.appendChild(vnContainer);
}

/**
 * Xử lý khi có tin nhắn mới từ AI
 */
function onMessageReceived(data) {
    // Sau này chúng ta sẽ bóc tách văn bản, lệnh đổi background, đổi sprite ở đây
    // console.log("[VN Player] Có tin nhắn mới:", data);
}

/**
 * Xử lý khi người dùng đổi chat (đổi nhân vật)
 */
function onChatChanged() {
    // Reset lại màn hình VN khi đổi sang chat khác
    // console.log("[VN Player] Đã chuyển chat.");
}

// Chạy hàm khởi tạo khi file được load
jQuery(async () => {
    await initExtension();
});
