import {ApiServiceRef} from './api.service.ref';
import {AppStateService} from './appState.service';
import {ApiService} from './base/api.service';
import {DatabaseService} from './base/database.service';
import {ShareService} from './base/share.service';
import {SyncService} from './base/sync.service';
import {TodoService} from './base/todo.service';
import {DatabaseServiceRef} from './database.service.ref';
import {FeatureService} from './feature.service';
import {NotificationService} from './notification.service';
import {ShareServiceFactoryDeps, ShareServiceFactory} from './share/share.service.factory';
import {SyncServiceRef} from './sync.service.ref';
import {TodoServiceRef} from './todo.service.ref';

export const SHARED_SERVICES = [
    FeatureService,
    { provide: TodoService, useClass: TodoServiceRef },
    { provide: ApiService, useClass: ApiServiceRef },
    { provide: SyncService, useClass: SyncServiceRef },
    { provide: DatabaseService, useClass: DatabaseServiceRef },
    { provide: ShareService, useFactory: ShareServiceFactory, deps: ShareServiceFactoryDeps },
    NotificationService,
    AppStateService,
];
