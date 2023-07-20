import React, { useEffect } from 'react';
import './SkillContentStyle.css';

const SkillContent = () => {
  useEffect(() => {
    const animateProgress = () => {
      const elements = document.getElementsByClassName('inner');
      Array.from(elements).forEach((element) => {
        const dataPg = element.getAttribute('data-pg');
        const width = parseInt(dataPg) > 100 ? '100%' : dataPg;
        element.style.width = width;
      });
    };

    animateProgress();
  }, []);

  return (
    <div className="skills_chart">
      <div className="responsive-container-block big-cont">
        <div className="responsive-container-block bg">
          <p className="text-blk title" id="w-c-s-fc_p-1-dm-id-2">
            Skills Chart
          </p>
          <p className="text-blk info">
            My skill sets which are using in my Company
          </p>
          <div className="responsive-container-block prog-cont">
            <div className="responsive-container-block prog">
              <p className="text-blk head">Java</p>
              <div className="responsive-container-block outer">
                <div className="responsive-container-block inner i1" data-pg="70%"></div>
              </div>
            </div>
            <div className="responsive-container-block prog">
              <p className="text-blk head">JavaScript</p>
              <div className="responsive-container-block outer">
                <div className="responsive-container-block inner i1" data-pg="85%"></div>
              </div>
            </div>
            <div className="responsive-container-block prog">
              <p className="text-blk head">Node.js</p>
              <div className="responsive-container-block outer">
                <div className="responsive-container-block inner i2" data-pg="95%"></div>
              </div>
            </div>
            <div className="responsive-container-block prog">
              <p className="text-blk head">Express.js</p>
              <div className="responsive-container-block outer">
                <div className="responsive-container-block inner i2" data-pg="95%"></div>
              </div>
            </div>
            <div className="responsive-container-block prog">
              <p className="text-blk head">React.js</p>
              <div className="responsive-container-block outer">
                <div className="responsive-container-block inner i3" data-pg="65%"></div>
              </div>
            </div>
            <div className="responsive-container-block prog">
              <p className="text-blk head">MongoDB</p>
              <div className="responsive-container-block outer">
                <div className="responsive-container-block inner i3" data-pg="90%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillContent;
