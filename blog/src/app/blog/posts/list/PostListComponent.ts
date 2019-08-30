import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Observable, BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';
import { finalize } from 'rxjs/operators';
import { PostService } from '../services/PostService';
import { PostDto } from '../services/dataModel/PostDto';
import { CreatePostDialogComponent } from '../dialogs/CreatePostDialogComponent';
import { EditPostDto } from '../services/dataModel/EditPostDto';
import { ConfirmationDialogComponent } from '../../dialogs/ConfirmationDialogComponent';

@Component({
    selector: 'app-post-list',
    templateUrl: './postList.html',
    styleUrls: ['postList.scss']
})

export class PostListComponent implements OnInit {
    public isLoading = false;
    public displayedColumns: string[] = ['id', 'title', 'subTitle', 'imageUrl', 'action'];

    private postListSubject: BehaviorSubject<PostDto[]> = new BehaviorSubject(null);

    constructor(private snackBar: MatSnackBar, private postService: PostService, private matDialog: MatDialog) {
    }

    ngOnInit(): void {
        this.isLoading = true;
        this.postService.getAllPostsItems()
            .pipe(finalize(() => this.isLoading = false))
            .subscribe((postListItems) => this.postListSubject.next(postListItems));
    }

    public getPostList(): Observable<PostDto[]> {
        return this.postListSubject.asObservable();
    }

    public editPost(editPost: EditPostDto) {
        const ref = this.matDialog.open(CreatePostDialogComponent, {
            width: '600px',
            data: { editPostDto: editPost }
        });

        ref.afterClosed().subscribe((editedPost: PostDto) => {
            if (editedPost) {
                const list = this.postListSubject.getValue();
                const postIndex = _.findIndex(list, post => post.id === editedPost.id);
                list[postIndex] = editedPost;

                this.postListSubject.next(_.cloneDeep(list));
            }
        });
    }

    public deletePost(postDto: PostDto) {
        const ref = this.matDialog.open(ConfirmationDialogComponent);
        ref.afterClosed().subscribe((canContinue) => {
            if (canContinue) {
                this.isLoading = true;
                this.postService.deletePost(postDto.id)
                    .pipe(finalize(() => this.isLoading = false))
                    .subscribe(() => {
                        const list = this.postListSubject.getValue();
                        _.remove(list, post => post.id === postDto.id);
                        this.postListSubject.next(_.cloneDeep(list));

                        this.snackBar.open(`Post ${postDto.title} has been removed`, null, { duration: 2500 });
                    });
            }
        })
    }

    public createPost() {
        const ref = this.matDialog.open(CreatePostDialogComponent, {
            width: '600px',
        });

        ref.afterClosed().subscribe((newPost: PostDto) => {
            if (newPost) {
                const list = this.postListSubject.getValue();
                list.push(newPost);
                this.postListSubject.next(_.cloneDeep(list));

                this.snackBar.open(`Post ${newPost.title} has been created`, null, { duration: 2500 });
            }
        });
    }

}