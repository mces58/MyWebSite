import { motion } from 'framer-motion';

import FeedbackCard from '@/components/FeedbackCard';
import { testimonials } from '@/constants';
import SectionWrapper from '@/hoc/SectionWrapper';
import { styles } from '@/styles';
import { textVariant } from '@/utils/motion';

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

const WrappedFeedbacks = SectionWrapper(Feedbacks, '');

export default WrappedFeedbacks;
