import styles from './LawsuitDetails.module.scss';
import { RequestResponseData } from '@/types/Requests';

export default function LawsuitDetails({response}: {response: RequestResponseData }) {
  return (
    <div className={styles.wrapper}>
      <header>
        <h1 className={styles.title} title={response.response_data.name}>{response.response_data.name}</h1>
        <span className={styles.code} title={`CÓDIGO: ${response.response_data.code}`}>{response.response_data.code}</span>
      </header>
      <div className={styles.layout}>
        <div className={styles.details}>
          <p className={styles.detail}><span className={styles.detailTitle}>Data: </span>{new Intl.DateTimeFormat('pt-Br').format(new Date(response.response_data.distribution_date))}</p>
          <p className={styles.detail}><span className={styles.detailTitle}>Nível de sigilo: </span>{response.response_data.secrecy_level}</p>
          <p className={styles.detail}><span className={styles.detailTitle}>Instância: </span>{response.response_data.instance}</p>
          <p className={styles.detail}><span className={styles.detailTitle}>Tribunal: </span>{response.response_data.tribunal_acronym}</p>
        </div>
        <div className={styles.classifications}>
          <h2 className={styles.classificationsHeader}>Classificações</h2>
          {
            response.response_data.classifications.map((classification) => (
              <div key={classification._id} className={styles.classification}>
                <p className={styles.classificationTitle}>{classification.name}</p>
                <p className={styles.classificationCode}>#{classification.code}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.persons}>
        <h2 className={styles.personsHeader}>Pessoas</h2>
        <ul className={styles.list}>
          {
            response.response_data.parties.map((person) => (
              <li key={person.document} className={styles.person}>
                <p className={styles.personType}>{person.person_type}</p>
                <p className={styles.personName}>{person.name}</p>
                <p className={styles.personDocument} title={person.document_type}>{person.document}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}