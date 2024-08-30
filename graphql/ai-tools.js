import { gql } from '@apollo/client';

export const TRANSCRIBE_VIDEO = gql`
  mutation Transcribe($file: Upload!) {
    transcribe(file: $file)
  }
`;
