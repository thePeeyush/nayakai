function generateUniqueId() {
    const randomNum = Math.floor(Math.random() * 1000);
    const timestamp = Date.now();
    return `${timestamp}${randomNum}`;
  }

export default generateUniqueId;