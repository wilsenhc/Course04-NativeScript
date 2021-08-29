import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { Toasty, ToastDuration, ToastPosition } from 'nativescript-toasty';
import { switchMap } from 'rxjs/operators';

import { DishService } from '../services/dish.service';
import { FavoriteService } from '../services/favorite.service';
import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';

@Component({
    selector: 'app-dishdetail',
    moduleId: module.id,
    templateUrl: './dishdetail.component.html',
    styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

    dish: Dish;
    comment: Comment;
    errMess: string;
    avgstars: string;
    numcomments: number;
    favorite: boolean = false;

    constructor(private dishservice: DishService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions,
        private favoriteservice: FavoriteService,
        private fonticon: TNSFontIconService,
        @Inject('baseURL') private baseURL) { }

    ngOnInit() {
        this.route.params
            .pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
            .subscribe(dish => {
                this.dish = dish;
                this.favorite = this.favoriteservice.isFavorite(this.dish.id.toString());
                this.numcomments = this.dish.comments.length;

                let total = 0;
                this.dish.comments.forEach(comment => total += comment.rating);
                this.avgstars = (total / this.numcomments).toFixed(2);
            },
                errmess => {
                    this.dish = null;
                    this.errMess = <any>errmess;
                });
    }

    addToFavorites() {
        if (!this.favorite) {
            console.log('Adding to Favorites', this.dish.id);
            this.favorite = this.favoriteservice.addFavorite(this.dish.id.toString());
            const toast = new Toasty({
                text: 'Added Dish ' + this.dish.id,
                position: ToastPosition.BOTTOM,
                duration: ToastDuration.SHORT,
            });
            toast.show();
        }
    }

    goBack(): void {
        this.routerExtensions.back();
    }
}
