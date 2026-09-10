import { Injectable, signal } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface BreadcrumbItem {
  label: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  breadcrumbs = signal<BreadcrumbItem[]>([]);

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const root = this.activatedRoute.root;
        this.breadcrumbs.set(this.buildBreadcrumbs(root.snapshot));
      });
  }

  private buildBreadcrumbs(
    snapshot: ActivatedRouteSnapshot,
    url: string = '',
    breadcrumbs: BreadcrumbItem[] = []
  ): BreadcrumbItem[] {
    const routeUrl = snapshot.url.map((segment) => segment.path).join('/');
    const fullUrl = routeUrl ? `${url}/${routeUrl}` : url;

    if (snapshot.data['breadcrumb']) {
      breadcrumbs.push({ label: snapshot.data['breadcrumb'], url: fullUrl });
    }

    if (snapshot.firstChild) {
      return this.buildBreadcrumbs(snapshot.firstChild, fullUrl, breadcrumbs);
    }

    return breadcrumbs;
  }
}