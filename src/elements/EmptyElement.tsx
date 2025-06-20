
import ic_empty from 'icons/ic_empty.svg';

export default function EmptyElement(props: any) {

  const { title, subtitle } = props;


  return (
    <>
    <div className="empty_element">
      <div className="empty_element_content">
        <span className="empty_element_title">{title}</span>
        <span className="empty_element_subtitle">{subtitle}</span>
      </div>
    </div>
    </>
  );
}