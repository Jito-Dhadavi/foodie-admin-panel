import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'app/services/rest-api.service';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    stats;
    constructor(private restApiService: RestApiService) { }

    ngOnInit() {
        this.getStats()
    }
    getStats() {
        this.restApiService.getStats().then(res => {
            if (res && res.code === 200) {
                this.stats = res.data
            }
        }).catch(err => {
            console.log('error is', err);
        })
    }
}
