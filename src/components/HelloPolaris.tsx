import { useState } from 'react'

import {
  BlockStack,
  Box,
  Button,
  ButtonGroup,
  Card,
  Grid,
  InlineGrid,
  InlineStack,
  List,
  MediaCard,
  Text,
  VideoThumbnail,
} from '@shopify/polaris'
import { PlusIcon } from '@shopify/polaris-icons'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
]

export function HelloPolaris() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  function MyButton({ count, onClick }: { count: number, onClick: () => void }) {
    return (
      <button onClick={onClick}>
        Clicked
        {' '}
        {count}
        {' '}
        times
      </button>
    )
  }

  const listItems = products.map(product => (
    <li key={product.id}>
      {product.title}
    </li>
  ),
  )
  function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={`Photo of ${user.name}`}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
        <ul>{listItems}</ul>
      </>
    )
  }

  return (
    <>
      <div>
        <h1>Welcome to my app</h1>
        <div>
          <h1>Counters that update together</h1>
          <MyButton count={count} onClick={handleClick} />
          <MyButton count={count} onClick={handleClick} />
        </div>
      </div>

      <Profile />

      <Grid>
        <Grid.Cell columnSpan={{ xs: 6 }}>
          <MediaCard
            title="Turn your side-project into a business"
            primaryAction={{
              content: 'Learn more',
              onAction: handleClick,
            }}
            description="In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business."
            popoverActions={[{ content: 'Dismiss', onAction: handleClick }]}
          >
            <VideoThumbnail
              videoLength={80}
              thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
              onClick={() => console.log('clicked')}
            />
          </MediaCard>
        </Grid.Cell>

        <Grid.Cell columnSpan={{ xs: 6 }}>
          <MediaCard
            title="Turn your side-project into a business"
            primaryAction={{
              content: 'Learn more',
              onAction: handleClick,
            }}
            description="In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business."
            popoverActions={[{ content: 'Dismiss', onAction: handleClick }]}
          >
            <VideoThumbnail
              videoLength={80}
              thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
              onClick={() => console.log('clicked')}
            />
          </MediaCard>
        </Grid.Cell>

        <Grid.Cell columnSpan={{ xs: 6 }}>
          <Card roundedAbove="xs">
            <Text as="h2" variant="headingSm">
              Online store dashboard
            </Text>
            <Box paddingBlockStart="200">
              <Text as="p" variant="bodyMd">
                View a summary of your online store’s performance.
              </Text>
              <Button onClick={handleClick} icon={PlusIcon}>Add theme</Button>
            </Box>
          </Card>
        </Grid.Cell>

        <Grid.Cell columnSpan={{ xs: 6 }}>
          <Card roundedAbove="xs">
            <Text as="h2" variant="headingSm">
              Online store dashboard
            </Text>
            <Box paddingBlockStart="200">
              <Text as="p" variant="bodyMd">
                View a summary of your online store’s performance.
              </Text>
              <ButtonGroup>
                <Button onClick={handleClick}>Cancel</Button>
                <Button onClick={handleClick} variant="primary">Save</Button>
              </ButtonGroup>
            </Box>
          </Card>
        </Grid.Cell>

        <Grid.Cell columnSpan={{ xs: 6 }}>
          <Card roundedAbove="sm">
            <BlockStack gap="200">
              <Text as="h2" variant="headingSm">
                Shipment 1234
              </Text>
              <BlockStack gap="200">
                <Text as="h3" variant="headingSm" fontWeight="medium">
                  Items
                </Text>
                <List>
                  <List.Item>1 × Oasis Glass, 4-Pack</List.Item>
                  <List.Item>1 × Anubis Cup, 2-Pack</List.Item>
                </List>
              </BlockStack>
              <InlineStack align="end">
                <ButtonGroup>
                  <Button onClick={handleClick} accessibilityLabel="Fulfill items">
                    Fulfill items
                  </Button>
                  <Button
                    icon={PlusIcon}
                    variant="primary"
                    onClick={handleClick}
                    accessibilityLabel="Create shipping label"
                  >
                    Create shipping label
                  </Button>
                </ButtonGroup>
              </InlineStack>
            </BlockStack>
          </Card>
        </Grid.Cell>

        <Grid.Cell columnSpan={{ xs: 6 }}>
          <Card roundedAbove="sm">
            <BlockStack gap="200">
              <InlineGrid columns="1fr auto">
                <Text as="h2" variant="headingSm">
                  Variants
                </Text>
                <Button
                  onClick={handleClick}
                  accessibilityLabel="Add variant"
                  icon={PlusIcon}
                >
                  Add variant
                </Button>
              </InlineGrid>
              <Text as="p" variant="bodyMd">
                Add variants if this product comes in multiple versions, like
                different sizes or colors.
              </Text>
            </BlockStack>
          </Card>
        </Grid.Cell>
      </Grid>
    </>
  )
}
