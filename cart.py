def list(event, context):
    return { "message": "Listing products in me cart" }

def add(event, context):
    return { "message": "Adding a product to me cart" }

def clear(event, context):
    return { "message": "Clearing out me cart" }

def checkout(event, context):
    return { "message": "Checking this cart out, yo"}