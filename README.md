/* Container chính của VN Player */
#st-vn-player-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999; /* Z-index rất cao để đè lên UI của ST */
    background-color: transparent; /* Mặc định trong suốt */
    pointer-events: none; /* Không chặn click chuột vào ST mặc định khi đang ẩn */
    
    /* Layout cơ bản */
    display: flex;
    flex-direction: column;
    justify-content: flex-end; /* Đẩy Textbox xuống dưới cùng */
    align-items: center;
}

/* 
  Sau này chúng ta sẽ thêm:
  - .vn-textbox (Hộp thoại)
  - .vn-character-sprite (Nhân vật)
  - .vn-background (Ảnh nền)
  - .vn-choice-menu (Menu lựa chọn)
*/
