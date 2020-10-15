export default class NotificationMessage {

  constructor(
    text = '',
    obj = {}) {
    this.text = text;
    this.duration = obj.duration;
    this.type = obj.type;
  }

  get template() {
    return `
      <div class="notification success" style="--value:${this.duration / 100}s">
        <div class="timer"></div>
        <div class="inner-wrapper">
          <div class="notification-header">${this.type}</div>
          <div class="notification-body">
            ${this.text}
          </div>
        </div>
      </div>
    `;
  }

  show() {
    document.body.insertAdjacentHTML('beforeEnd', this.template);

    let notificationArr = document.body.querySelectorAll('.notification');
    let last = notificationArr[notificationArr.length - 1];

    for (let i = 0; i < notificationArr.length - 1; i++) {
      notificationArr[i].remove();
    }

    setTimeout(()=> {
      last.remove();
    }, this.duration * 10);
  }
}
