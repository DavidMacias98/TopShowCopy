import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  scrollToFooter(): void {
    // Espera un breve momento para asegurarse de que el contenido se haya renderizado
    setTimeout(() => {
      const footerElement = document.getElementById('target-section');
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

}
