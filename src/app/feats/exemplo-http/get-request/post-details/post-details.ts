import { httpResource } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../post-request/post';

@Component({
    selector: 'app-post-details',
    imports: [],
    templateUrl: './post-details.html',
    styleUrl: './post-details.css',
})
export class PostDetails {

    private readonly route = inject(ActivatedRoute);

    private readonly postId = this.route.snapshot.paramMap.get('id');

    protected readonly post = httpResource<Post>(
        () => 'https://jsonplaceholder.typicode.com/posts/' + this.postId)

}
