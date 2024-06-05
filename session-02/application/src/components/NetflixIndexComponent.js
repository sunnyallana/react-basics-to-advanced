import './NetflixIndexComponent.css';
import { NetflixHeaderComponent } from './NetflixHeaderComponent';
import { NetflixMainComponent } from './NetflixMainComponent';
import { NetflixRegisterComponent } from './NetflixRegisterComponent';
import { NetflixFooterComponent } from './NetflixFooterComponent';


export default function NetflixIndexComponent() {
  return (
    <div className="container-fluid" >
      <div className="box">
        <header>
        <NetflixHeaderComponent />
        </header>

        {/* To have items side by side and centered both horizontally and vertically */}
        <section className="d-flex justify-content-center align-items-center">
          <main>
                <NetflixMainComponent />
                <NetflixRegisterComponent />
          </main>
        </section>
        <NetflixFooterComponent />
      </div>
    </div>
  );
}