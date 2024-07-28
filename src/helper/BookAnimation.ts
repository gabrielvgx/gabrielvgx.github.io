class BookAnimation {
  private currentPage = 1;

  toggleClass(e: any, toggleClassName: string) {
    if(e.className.includes(toggleClassName)) {
      e.className = e.className.replace(' ' + toggleClassName, '');
    } else {
      e.className += ' ' + toggleClassName;
    }
  }
  movePage(e: any, page: number) {
    if (page == this.currentPage) {
      this.currentPage+=2;
      this.toggleClass(e, "left-side");
      this.toggleClass(e.nextElementSibling, "left-side");
    }
    else if (page = this.currentPage - 1) {
      this.currentPage-=2;
      this.toggleClass(e, "left-side");
      this.toggleClass(e.previousElementSibling, "left-side");
    }
  }
}

export default new BookAnimation();
export { BookAnimation };