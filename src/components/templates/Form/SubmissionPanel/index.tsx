import { FunctionComponent } from 'react';
import Prompt from './Prompt';
import FormActionButtonList from '../../../molecules/FormActionButtonList';
import { userInteractionsConfiguration } from '../../../../lib/enrollment-actions-configuration';
import { useFormSubmission } from './hooks/use-form-submission';
import { croute } from '../../../../lib/enrollment-submission-handler';

type Props = {
  enrollment: any;
  handleSubmit: Function;
  updateEnrollment: Function;
};

const SubmissionPanel: FunctionComponent<Props> = ({
  enrollment,
  handleSubmit,
  updateEnrollment,
}) => {
  const {
    pendingAction,
    loading,
    onActionButtonClick,
    waitingForUserInput,
    onPromptConfirmation,
    onPromptCancellation,
  } = useFormSubmission(handleSubmit, enrollment, updateEnrollment, croute);

  return (
    <>
      <FormActionButtonList
        pendingAction={pendingAction}
        enrollment={enrollment}
        loading={loading}
        onActionButtonClick={onActionButtonClick}
      />

      {waitingForUserInput && (
        <Prompt
          onAccept={onPromptConfirmation}
          onCancel={onPromptCancellation}
          acceptLabel={
            userInteractionsConfiguration[pendingAction!].displayProps.label
          }
          acceptCssClass={
            userInteractionsConfiguration[pendingAction!].displayProps.cssClass
          }
          selectedAction={pendingAction as string}
          enrollment={enrollment}
        />
      )}
    </>
  );
};

export default SubmissionPanel;
