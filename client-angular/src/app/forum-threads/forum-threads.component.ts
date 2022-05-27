import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from '../shared/services/dynamic-script-loader.service';


@Component({
  selector: 'app-forum-threads',
  templateUrl: './forum-threads.component.html',
  styleUrls: ['./forum-threads.component.css']
})
export class ForumThreadsComponent implements OnInit {

  threads:any = {};

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) {

   }

  createForumThreads(){

    let arrayValidThreads = new Array();

    for (let i = 0; i <= this.threads.length - 1; i++)
    {
      if(this.threads[i].title != ""){

        arrayValidThreads.push(this.threads[i]);


      }
    }

    let forumElement = document.getElementById('forumThreads');

    let threadSection;

    for (let i = 0; i <= 11; i++){

      threadSection = document.createElement("section");

      threadSection.innerHTML = "<section class='forum-sections'><hr><a href=\"/forum/node/"+arrayValidThreads[i].threadid+"\">"+arrayValidThreads[i].title+"</a><br /> <hr/></section>";

      forumElement.appendChild(threadSection);

    }

  }


  ngOnInit() {
  }

}
