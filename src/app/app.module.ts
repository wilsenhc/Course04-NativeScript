import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptHttpClientModule } from '@nativescript/angular';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FavoritesComponent } from './favorites/favorites.component';

import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { FavoriteService } from './services/favorite.service';

import { baseURL } from './shared/baseurl';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        HttpClientModule,
        NativeScriptModule,
        NativeScriptHttpClientModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
        TNSFontIconModule.forRoot({
            'fa': require('./fonts/font-awesome.min.css')
        }),
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        MenuComponent,
        DishdetailComponent,
        ContactComponent,
        AboutComponent,
        FavoritesComponent,
    ],
    providers: [
        { provide: 'baseURL', useValue: baseURL },
        DishService,
        ProcessHTTPMsgService,
        PromotionService,
        LeaderService,
        FavoriteService,
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
