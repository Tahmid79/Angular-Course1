import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

   @Input()
   course : Course  ;

   @Input()
   cardIndex: number ;

   @Output()
   courseSelected = new EventEmitter<Course>() ;

   onCourseViewed() {

     console.log('course-card clicked') ;
     this.courseSelected.emit(this.course) ;

   }

  isImageVisible() {
     return this.course &&  this.course.iconUrl ;
  }

  cardClasses(){
    // return {'beginner': this.course.category ==='BEGINNER' ,
    //   'course-card': true} ;

    if (this.course.category==='BEGINNER'){
      return ['beginner'] ;
    }

  }

  cardStyles(){
     return {'text-decoration': 'underline'}  ;
  }

  ngOnInit(): void {
  }

}
