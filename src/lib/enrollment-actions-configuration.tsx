import { ReactElement } from 'react';

export enum EnrollmentAction {
  notify = 'notify',
  destroy = 'destroy',
  update = 'update',
  send_application = 'send_application',
  refuse_application = 'refuse_application',
  review_application = 'review_application',
  validate_application = 'validate_application',
}

export type ActionConfiguration = {
  displayProps: {
    label: string;
    cssClass: string;
    icon?: ReactElement;
  };
  needsToComputeNextEnrollmentState?: boolean;
  promptForComment?: boolean;
};

export const userInteractionsConfiguration: {
  [key in EnrollmentAction]: ActionConfiguration;
} = {
  notify: {
    displayProps: {
      label: 'Envoyer un message',
      cssClass: 'secondary',
    },
    needsToComputeNextEnrollmentState: true,
    promptForComment: true,
  },
  destroy: {
    displayProps: {
      label: 'Supprimer la demande',
      cssClass: 'fr-fi-delete-line fr-btn--secondary',
    },
  },
  update: {
    displayProps: {
      label: 'Sauvegarder le brouillon',
      cssClass: 'fr-fi-save-line fr-btn--primary',
    },
  },
  send_application: {
    displayProps: {
      label: 'Soumettre la demande',
      cssClass: 'fr-fi-checkbox-line fr-btn--primary',
    },
    needsToComputeNextEnrollmentState: true,
  },
  refuse_application: {
    displayProps: {
      label: 'Refuser',
      cssClass: 'fr-fi-alert-line fr-btn--primary',
    },
    needsToComputeNextEnrollmentState: true,
    promptForComment: true,
  },
  review_application: {
    displayProps: {
      label: 'Demander une modification',
      cssClass: 'fr-fi-edit-line fr-btn--secondary',
    },
    needsToComputeNextEnrollmentState: true,
    promptForComment: true,
  },
  validate_application: {
    displayProps: {
      label: 'Valider',
      cssClass: 'fr-fi-checkbox-line fr-btn--primary',
    },
    needsToComputeNextEnrollmentState: true,
    promptForComment: true,
  },
};
