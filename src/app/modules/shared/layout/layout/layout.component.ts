import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { SharedModule } from '../../shared.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, CommonModule, MatSidenavModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnDestroy, AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  public isShowSidebar: boolean;
  public mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);

    this.isShowSidebar = !this.mobileQuery.matches;
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);

    this.sidenav?.close();
  }

  public ngAfterViewInit(): void {
    if (this.mobileQuery.matches) {
      this.sidenav?.close();
    }
  }
}
