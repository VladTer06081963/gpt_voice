// class Loader {
//     icons = ["⌛", "⏳"];
//     message = null;
//     interval = null;
  
//     constructor(ctx) {
//       this.ctx = ctx;
//     }
  
//     async show() {
//       let index = 0;
//       this.message = await this.ctx.reply(this.icons[index]);
//       this.interval = setInterval(() => {
//         index = (index < this.icons.length - 1) ? index + 1 : 0;
//         this.ctx.telegram.editMessageText(
//           this.ctx.chat.id,
//           this.message.message_id,
//           null,
//           this.icons[index]
//         );
//       }, 500);
//     }
  
//     hide() {
//       clearInterval(this.interval);
//       if (this.message && this.ctx) {
//         this.ctx.telegram.deleteMessage(this.ctx.chat.id, this.message.message_id);
//       }
//     }
// }

// export default Loader;
class Loader {
    icons = ["⌛", "⏳"];
    message = null;
    interval = null;
    currentIndex = 0;
  
    constructor(ctx) {
      this.ctx = ctx;
    }
  
    async show() {
      this.message = await this.ctx.reply(this.icons[this.currentIndex]);
      this.interval = setInterval(async () => {
        const nextIndex = (this.currentIndex + 1) % this.icons.length;
        if (this.icons[nextIndex] !== this.icons[this.currentIndex]) {
          try {
            await this.ctx.telegram.editMessageText(
              this.ctx.chat.id,
              this.message.message_id,
              null,
              this.icons[nextIndex]
            );
            this.currentIndex = nextIndex;
          } catch (e) {
            console.log('Ошибка при изменении сообщения: ', e);
            // Дополнительная обработка ошибок, если необходимо
          }
        }
      }, 500);
    }
  
    hide() {
      clearInterval(this.interval);
      if (this.message && this.ctx) {
        this.ctx.telegram.deleteMessage(this.ctx.chat.id, this.message.message_id)
          .catch(e => {
            console.log('Ошибка при удалении сообщения: ', e);
            // Дополнительная обработка ошибок, если необходимо
          });
      }
    }
  }
  
  export default Loader;
  