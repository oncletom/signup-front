import React from 'react';
import PropTypes from 'prop-types';

import Form from '../components/Form';
import Nav from '../components/Nav';
import OrganisationSection from '../components/form-sections/OrganisationSection';
import DescriptionSection from '../components/form-sections/DescriptionSection';
import DonneesSection from '../components/form-sections/DonneesSection';
import CadreJuridiqueSection from '../components/form-sections/CadreJuridiqueSection';
import DonneesPersonnellesSection from '../components/form-sections/DonneesPersonnellesSection';
import MiseEnOeuvreSection from '../components/form-sections/MiseEnOeuvreSection';
import CguSection from '../components/form-sections/CguSection';
import { sample } from 'lodash';

const contacts = {
  metier: {
    heading: 'Contact métier',
    description: () => (
      <p>
        Cette personne sera contactée en cas de problème fonctionnel sur votre
        service.
      </p>
    ),
    email: '',
    phone_number: '',
  },
  technique: {
    heading: 'Contact technique',
    description: () => (
      <p>
        Cette personne sera contactée en cas de problème technique sur votre
        service.
      </p>
    ),
    email: '',
    phone_number: '',
  },
};

const DonneesDescription = () => (
  <div className="text-quote">
    <p>
      Sélectionner ci-dessous les API qui sont strictement nécessaires pour
      cette démarche.
    </p>
    <p>
      Vous pouvez trouver une description détaillée de chaque API sur{' '}
      <a
        href="https://entreprise.api.gouv.fr/catalogue/"
        target="_blank"
        rel="noopener noreferrer"
      >
        entreprise.api.gouv.fr
      </a>
      .
    </p>
    <p>
      Pour mémoire, seuls les agents dûment habilités pour traiter cette
      démarche doivent pouvoir accéder aux données transmises.
    </p>
  </div>
);

// NB: this list was manually updated from https://dashboard.entreprise.api.gouv.fr/api/admin/roles
// Then edited by API Entreprise UX team
const availableScopes = [
  {
    value: 'entreprises',
    label: 'Données de référence d’une entité - INSEE & Inforgreffe',
    groupTitle: 'Informations générales :',
    link: 'https://entreprise.api.gouv.fr/catalogue/#entreprises',
  },
  {
    value: 'etablissements',
    label: 'Données de référence d’un établissement - INSEE',
    groupTitle: 'Informations générales :',
    link: 'https://entreprise.api.gouv.fr/catalogue/#etablissements',
  },
  {
    value: 'extraits_rcs',
    label: 'Extrait RCS - Infogreffe',
    groupTitle: 'Informations générales :',
    link: 'https://entreprise.api.gouv.fr/catalogue/#extraits_rcs_infogreffe',
  },
  {
    value: 'associations',
    label:
      'Informations déclaratives d’une association - Ministère de l’Intérieur',
    groupTitle: 'Informations générales :',
    link: 'https://entreprise.api.gouv.fr/catalogue/#associations',
  },
  {
    value: 'documents_association',
    label: 'Divers documents d’une association - Ministère de l’Intérieur',
    groupTitle: 'Informations générales :',
    link: 'https://entreprise.api.gouv.fr/catalogue/#documents_associations',
  },
  {
    value: 'actes_bilans_inpi',
    label: 'Actes et bilans annuels - INPI',
    groupTitle: 'Informations générales :',
    link: 'https://entreprise.api.gouv.fr/catalogue/#actes_inpi',
  },
  {
    value: 'conventions_collectives',
    label:
      'Conventions collectives - Fabrique numérique des Ministères Sociaux',
    groupTitle: 'Informations générales :',
    link: 'https://entreprise.api.gouv.fr/catalogue/#conventions_collectives',
  },
  {
    value: 'exercices',
    label: 'Chiffre d’affaires - DGFIP',
    groupTitle: 'Informations financières :',
    link: 'https://entreprise.api.gouv.fr/catalogue/#exercices',
  },
  {
    value: 'bilans_entreprise_bdf',
    label: '3 derniers bilans annuels - Banque de France',
    groupTitle: 'Informations financières :',
    link: 'https://entreprise.api.gouv.fr/catalogue/#bilans_entreprises_bdf',
  },
  {
    value: 'liasse_fiscale',
    label: 'Déclarations de résultat - DGFIP',
    groupTitle: 'Informations financières :',
    link: 'https://entreprise.api.gouv.fr/catalogue/#liasses_fiscales_dgfip',
  },
  {
    value: 'attestations_fiscales',
    label: 'Attestation fiscale - DGFIP',
    groupTitle: 'Attestations sociales et fiscales :',
    link:
      'https://entreprise.api.gouv.fr/catalogue/#attestations_fiscales_dgfip',
  },
  {
    value: 'attestations_sociales',
    label: 'Attestation de vigilance - ACOSS',
    groupTitle: 'Attestations sociales et fiscales :',
    link:
      'https://entreprise.api.gouv.fr/catalogue/#attestations_sociales_acoss',
  },
  {
    value: 'attestations_agefiph',
    label: 'Conformité emploi des travailleurs handicapés - AGEFIPH',
    groupTitle: 'Attestations sociales et fiscales :',
    link: 'https://entreprise.api.gouv.fr/catalogue/#attestations_agefiph',
  },
  {
    value: 'msa_cotisations',
    label: 'Cotisations de sécurité sociale agricole - MSA',
    groupTitle: 'Attestations sociales et fiscales :',
    link: 'https://entreprise.api.gouv.fr/catalogue/#cotisations_msa',
  },
  {
    value: 'probtp',
    label: 'Cotisations retraite bâtiment - ProBTP',
    groupTitle: 'Attestations sociales et fiscales :',
    link:
      'https://entreprise.api.gouv.fr/catalogue/#cotisation_retraite_probtp',
  },
  {
    value: 'fntp_carte_pro',
    label: 'Carte professionnelle travaux publics - FNTP',
    groupTitle: 'Attestations sociales et fiscales :',
    link:
      'https://entreprise.api.gouv.fr/catalogue/#cartes_professionnelles_fntp',
  },
  {
    value: 'certificat_cnetp',
    label: 'Cotisations congés payés & chômage intempéries - CNETP',
    groupTitle: 'Attestations sociales et fiscales :',
    link: 'https://entreprise.api.gouv.fr/catalogue/#certificats_cnetp',
  },
  {
    value: 'certificats_rge_ademe',
    label: 'Certificats RGE (ADEME)',
    groupTitle: 'Certifications professionnelles :',
    link: 'https://entreprise.api.gouv.fr/catalogue/#certificats_rge_ademe',
  },
  {
    value: 'qualibat',
    label: 'Certification de qualification bâtiment - Qualibat',
    groupTitle: 'Certifications professionnelles :',
    link: 'https://entreprise.api.gouv.fr/catalogue/#certificats_qualibat',
  },
  {
    value: 'certificat_opqibi',
    label: 'Certification de qualification d’ingénierie - OPQIBI',
    groupTitle: 'Certifications professionnelles :',
    link: 'https://entreprise.api.gouv.fr/catalogue/#certificats_opqibi',
  },
  {
    value: 'extrait_court_inpi',
    label: 'Brevets, modèles et marques déposés - INPI',
    groupTitle: 'Propriété intellectuelle :',
    link: 'https://entreprise.api.gouv.fr/catalogue/#extraits_courts_inpi',
  },
];

const intitulePlaceholder = sample([
  '« Pré-remplissage du formulaire de création de compte des entreprise »',
  '« Simplification des demandes de subvention de la région »',
  "« Déclaration d'installation classée pour la protection de l'environnement »",
]);

const ApiEntreprise = ({
  match: {
    params: { enrollmentId },
  },
}) => (
  <div className="dashboard">
    <Nav
      navLinks={[
        { id: 'head', label: 'Formulaire', style: { fontWeight: 'bold' } },
        { id: 'organisation', label: 'Organisation' },
        { id: 'description', label: 'Description' },
        { id: 'donnees', label: 'Données' },
        { id: 'cadre-juridique', label: 'Cadre juridique' },
        { id: 'donnees-personnelles', label: 'Données personnelles' },
        { id: 'contacts-moe', label: 'Mise en œuvre' },
        { id: 'cgu', label: "Modalités d'utilisation" },
      ]}
      contactInformation={[
        {
          email: 'support@entreprise.api.gouv.fr',
          label: 'Contact mail',
          subject:
            'Contact%20via%20datapass.api.gouv.fr%20-%20API%20Entreprise',
        },
        {
          tel: '+33622814166',
        },
      ]}
    />
    <div className="main">
      <Form
        enrollmentId={enrollmentId}
        target_api="api_entreprise"
        title="Demande d'accès à l'API Entreprise"
      >
        <OrganisationSection />
        <DescriptionSection intitulePlaceholder={intitulePlaceholder} />
        <DonneesSection
          availableScopes={availableScopes}
          DonneesDescription={DonneesDescription}
        />
        <CadreJuridiqueSection />
        <DonneesPersonnellesSection />
        <MiseEnOeuvreSection initialContacts={contacts} />
        <CguSection cguLink="https://entreprise.api.gouv.fr/cgu/" />
      </Form>
    </div>
  </div>
);

ApiEntreprise.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      enrollmentId: PropTypes.string,
    }),
  }),
};

ApiEntreprise.defaultProps = {
  match: {
    params: {
      enrollmentId: null,
    },
  },
};

export default ApiEntreprise;
