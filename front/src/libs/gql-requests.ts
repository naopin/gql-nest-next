import { initUrqlClient } from 'next-urql';
import { Client } from 'urql';

const GRAPHQL_ENDPOINT = "http://localhost:3333/graphql";

export function urqlClient(): Promise<Client> {
  return new Promise((resolve, reject) => {
    const client = initUrqlClient(
      {
        url: GRAPHQL_ENDPOINT,
      },
      false,
    );
    if (!client) {
      reject(Error('Failed to init initUrqlClient.'));
    } else {
      resolve(client);
    }
  });
}