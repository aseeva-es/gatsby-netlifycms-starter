import React from 'react'
import PropTypes from 'prop-types'
import "../../css/reset.css"
import "../../css/main.css"

const TestimonialsPreview = ({ entry, getAsset }) => {
  const testimonials = entry.getIn(['data', 'testimonials']).toJS()

  if (testimonials) {
      console.log(testimonials);
      return (
          <div>
            {
            testimonials.map((testimonial, index) => {
                console.log(getAsset(testimonial.image));
            return (
                <div class="studio-testimonials-in mb20">
                    <div class="studio-testimonials-main">
                        <div key={index} className="studio-testimonials-slide studio-testimonials-slide--active">
                            <div className="studio-testimonials-icon" style={{backgroundImage: "url("+getAsset(testimonial.image).url+")"}}></div>
                            <p className="studio-testimonials-text ffpd fz24">
                                {testimonial.text}
                            </p>
                            <p className="studio-testimonials-name ffpd fz24 fwb tac color-gold">{testimonial.name}</p>
                        </div>
                    </div>
                </div>
            )
            })
        }
        </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

TestimonialsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TestimonialsPreview