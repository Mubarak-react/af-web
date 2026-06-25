import React from "react";



function TrainingCards(){
   return(
   
   <>
   <section className="slide-section training-section">
          <div className="training-wrapper" ref={trainingRef}>
            <div className="training-header">
              <h2 className="training-main-title">Media Training <span>Programs</span></h2>
              <p className="training-sub-desc">
                Master industry-standard tools and techniques with our practical hands-on training courses led by experts.
              </p>
            </div>

            <div className="training-grid">
              {/* Program 1 */}
              <div className="training-card glass-card">
                <div className="card-media-box">
                  {/* <img src={PhotographyImg} alt="Photography" /> */}
                </div>
                <div className="card-body-content">
                  <h3>Photography</h3>
                  <p>Commercial, product, and portrait photography techniques.</p>
                  <button className="btn-learn">Learn More</button>
                </div>
              </div>

              {/* Program 2 */}
              <div className="training-card glass-card">
                <div className="card-media-box">
                  {/* <img src={CinematographyImg} alt="Cinematography" /> */}
                </div>
                <div className="card-body-content">
                  <h3>Cinematography</h3>
                  <p>Advanced camera operation and cinematic lighting workflows.</p>
                  <button className="btn-learn">Learn More</button>
                </div>
              </div>

              {/* Program 3 */}
              <div className="training-card glass-card">
                <div className="card-media-box">
                  {/* <img src={VideoEditingImg} alt="Video Editing" /> */}
                </div>
                <div className="card-body-content">
                  <h3>Video Editing</h3>
                  <p>Color grading, motion graphics, and post-production skills.</p>
                  <button className="btn-learn">Learn More</button>
                </div>
              </div>

              {/* Program 4 */}
              <div className="training-card glass-card">
                <div className="card-media-box">
                  {/* <img src={DroneImg} alt="Gimbal & Drone" /> */}
                </div>
                <div className="card-body-content">
                  <h3>Gimbal & Drone</h3>
                  <p>Aerial cinematography and advanced camera stabilization.</p>
                  <button className="btn-learn">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </section>
    
    
    
    </>
   )
}