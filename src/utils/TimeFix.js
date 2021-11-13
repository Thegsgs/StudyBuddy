class TimeFix {
  constructor() {}

  _currentTime() {
    return new Date();
  }

  hourFix() {
    if (this._currentTime().getHours() < 10) {
      return `0${this._currentTime().getHours()}`;
    } else return this._currentTime().getHours();
  }

  minuteFix() {
    if (this._currentTime().getMinutes() < 10) {
      return `0${this._currentTime().getMinutes()}`;
    } else return this._currentTime().getMinutes();
  }
}

export default new TimeFix();
