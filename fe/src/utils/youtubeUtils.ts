export function getYouTubeThumbnailFromUrl(url: string): string {
    // Regex để trích xuất ID video từ URL
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const matches = url.match(regex);
    
    // Nếu tìm thấy ID video, trả về URL của thumbnail
    if (matches) {
      const videoId = matches[1];
      return `https://img.youtube.com/vi/${videoId}/0.jpg`;
    }
  

    return "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg";
  }
  export function getYouTubeIframe(url: string): string {
    // Regex để trích xuất ID video từ URL
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const matches = url.match(regex);
    
    // Nếu tìm thấy ID video, trả về URL của thumbnail
    if (matches) {
      const videoId = matches[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
  

    return url;
  }
