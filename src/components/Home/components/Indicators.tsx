export default function Indicators(props: any) {
    // const { data } = props;
  
    return (
      <div className="dashboard_box">
          <div id='indicator_1' className="dashboard_card indicator">
              <div className="dashboard_card_value">$1.000</div>
              <div className="dashboard_card_label">Saldo</div>
          </div>

          <div id='indicator_2' className="dashboard_card indicator">
              <div className="dashboard_card_value">$500</div>
              <div className="dashboard_card_label">Costos del mes</div>
          </div>
  
          <div id='indicator_3' className="dashboard_card indicator">
              <div className="dashboard_card_value">500</div>
              <div className="dashboard_card_label">Envíos del mes</div>
          </div>
  
          
  
          <div id='indicator_4' className="dashboard_card indicator">
              <div className="dashboard_card_value">50</div>
              <div className="dashboard_card_label">Envíos del día</div>
          </div>
      </div>
    );
  }