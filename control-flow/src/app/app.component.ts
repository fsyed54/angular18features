import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userPercentage: number = 0;
  gradeClass: string = '';

  calculateGrade() {
    if (this.userPercentage >= 90) {
      this.gradeClass = 'grade-a';
    } else if (this.userPercentage >= 80) {
      this.gradeClass = 'grade-b';
    } else if (this.userPercentage >= 70) {
      this.gradeClass = 'grade-c';
    } else if (this.userPercentage >= 60) {
      this.gradeClass = 'grade-d';
    } else {
      this.gradeClass = 'grade-f';
    }
  }
}
