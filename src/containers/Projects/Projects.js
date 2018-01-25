import React, { Component } from 'react';
import Zoomy from 'react-zoomy';

class Projects extends Component {
  render() {
    return (
      <div>
        <Zoomy
          imageUrl={'https://images.unsplash.com/photo-1441986300917-64674bd600d8?dpr=2&auto=format&fit=crop&w=767&h=512&q=80&cs=tinysrgb&crop='}
          renderThumbnail={({ showImage }) =>
          <button onClick={showImage}
          >Show Image</button>}
          scale={[1.1, 1.1]}
          imageProps={{
            style: {
              width: '100vw',
              height: 'auto'
            }
          }}
        />
      </div>
    );
  }
}

export default Projects;
