import styled from "styled-components";
import { format } from "date-fns";
import { useEditorContext } from "context";

const DATE_FORMAT = "dd.MM.yyyy";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #202020;
`;

const Text = styled.p`
  color: #202020;
`;

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.span`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;

  background-color: #eaedf0;
`;

const AuthorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateWrapper = styled.p`
  color: #6f6f6f;
  font-size: 0.875rem;
`;

export function MetadataContent() {
  const { metadata } = useEditorContext();

  return (
    <Wrapper>
      <Title>{metadata.title}</Title>
      <Text>{metadata.description}</Text>
      <AuthorWrapper>
        <Avatar />
        <AuthorInfoWrapper>
          <Text>{metadata.author}</Text>
          <DateWrapper>
            {format(new Date(metadata.created_at), DATE_FORMAT)}
          </DateWrapper>
        </AuthorInfoWrapper>
      </AuthorWrapper>
    </Wrapper>
  );
}
